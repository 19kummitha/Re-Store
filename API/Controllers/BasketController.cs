using System;
using API.Data;
using API.DTO;
using API.Entities;
using API.Extensions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers;

public class BasketController(StoreContext context) : BaseApiController
{
  [HttpGet]
  public async Task<ActionResult<BasketDto>> GetBasket()
  {
    var basket = await RetrieveBasket();
    if (basket == null) return NoContent();
    return basket.ToDto();
  }
  [HttpPost]
  public async Task<ActionResult<BasketDto>> AddItemToProduct(int productId, int quantity)
  {
    var basket = await RetrieveBasket();
    basket ??= CreateBasket();
    var product = await context.Products.FindAsync(productId);
    if (product == null) return BadRequest("Problem occur while adding item ");
    basket.AddItem(product, quantity);
    var result = await context.SaveChangesAsync() > 0;
    if (result)
    {
      return CreatedAtAction(nameof(GetBasket), basket.ToDto());
    }
    return BadRequest("Problem during updating basket");
  }



  [HttpDelete]
  public async Task<ActionResult> RemoveItemFromBasket(int productId, int quantity)
  {
    var basket = await RetrieveBasket();
    if (basket == null)
    {
      return BadRequest("Unable to retrieve the basket");
    }
    basket.RemoveItem(productId, quantity);
    var result = await context.SaveChangesAsync() > 0;
    if (result)
    {
      return Ok();
    }
    return BadRequest("Problem while updating the basket");
  }
  private async Task<Basket?> RetrieveBasket()
  {
    return await context.Baskets
                  .Include(x => x.Items)
                  .ThenInclude(x => x.Product)
                  .FirstOrDefaultAsync(x => x.BasketId == Request.Cookies["basketId"]);
  }
  private Basket CreateBasket()
  {
    var basketId = Guid.NewGuid().ToString();
    var cookieOptions = new CookieOptions
    {
      IsEssential = true,
      Expires = DateTime.UtcNow.AddDays(30)
    };
    Response.Cookies.Append("basketId", basketId, cookieOptions);
    var basket = new Basket { BasketId = basketId };
    context.Baskets.Add(basket);
    return basket;
  }
}
