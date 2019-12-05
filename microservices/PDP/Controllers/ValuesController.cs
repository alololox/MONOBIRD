using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Security.Cryptography.X509Certificates;
using System.Threading.Tasks;
using cdp_api.Helpers;
using cdp_api.models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging.Abstractions;
using Newtonsoft.Json;

namespace cdp_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public IConfiguration _configuration { get; private set; }
        private readonly IHttpClientFactory _clientFactory;
        private recordsRecord _result;
        private static string _apiPath;

        public ValuesController(IHttpClientFactory clientFactory, IConfiguration configuration)
        {
            _configuration = configuration;
            _clientFactory = clientFactory;
            _apiPath =  _configuration["pimPath"];
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<CDP> Get(string id)
        {
            var data = OnGet(id).Result;
            if(data.Length > 0)
                _result = JsonConvert.DeserializeObject<recordsRecord>(data); 
             return _result != null ? _result.toCDP() : null;
            
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

     
        public async Task<string> OnGet(string value)
        {
          
            
            var c = _clientFactory.CreateClient("pim");
            var resp = await c.GetAsync("https://localhost:5001/api/values/6202");
            if (resp.IsSuccessStatusCode)
            {
var data = await resp.Content.ReadAsStringAsync();
return data;
             
            }

            return null;
        }
    }
}
