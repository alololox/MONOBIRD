using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace APIGatewayWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PDPController : Controller
    {
        private readonly List<string> _productNos = new List<string>(new string[] { "1111", "2222", "3333" });
        private readonly ILogger<PDPController> _logger;
        public PDPController(ILogger<PDPController> logger)
        {
            _logger = logger;
        }

        [HttpGet("{productNo}")]
        public string Product(string productNo)
        {
            {
                // authentication, cookies set 
            }
            
            // input validation
            var foundProduct = _productNos.Find(x => x == productNo);
            if (foundProduct == null)
            {                
                // log any errors
                _logger.LogWarning($"{productNo} not found.");
                return "Product not found.";
            }
            else
            {
                // localization - example: jp, fr
                // call to services
                // -- PIM (product info)
                // -- magento (price)
                return $"Product service - {productNo}";
            }
        }
    }
}