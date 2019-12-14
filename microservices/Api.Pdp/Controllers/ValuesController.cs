using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using Api.Pdp.Helpers;
using Api.Pdp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace Api.Pdp.Controllers
{
    [ApiController]
    [Route("[controller]")]
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
        public ActionResult<PdpModel> Get(string id)
        
        {
            var data = OnGet(id).Result;
            if(data.Length > 0)
                _result = JsonConvert.DeserializeObject<recordsRecord>(data); 
             return _result != null ? _result.toPdpModel() : null;
            
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

     
        public async Task<string> OnGet(string value)
        {
          
            
            var c = _clientFactory.CreateClient("pim");
            var resp = await c.GetAsync(_apiPath + value);
            if (resp.IsSuccessStatusCode)
            {
var data = await resp.Content.ReadAsStringAsync();
return data;
             
            }

            return null;
        }
    }
}
