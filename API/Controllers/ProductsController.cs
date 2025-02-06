using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext context;

        public ProductsController(StoreContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public ActionResult<List<Product>> GetProducts()
        {
            return context.Products.ToList();
        }
        [HttpGet("{id}")]
        public ActionResult<Product> GetProductById(int id)
        {
            var product = context.Products.Find(id);
            if (product != null)
            {
                return product;
            }
            else
            {
                return NotFound("Product not found");
            }
        }
    }
}
