using System;
using API.DTO;
using API.Entities;

namespace API.Extensions;

public static class BasketExtensions
{
  public static BasketDto ToDto(this Basket basket)
  {
    return new BasketDto
    {
      BasketId = basket.BasketId,
      Items = basket.Items.Select(x => new BasketItemDto
      {
        ProductId = x.ProductId,
        Name = x.Product.Name,
        Price = x.Product.Price,
        Type = x.Product.Type,
        Brand = x.Product.Brand,
        PictureUrl = x.Product.PictureUrl,
        Quantity = x.Quantity,
      }).ToList()
    };
  }
}
