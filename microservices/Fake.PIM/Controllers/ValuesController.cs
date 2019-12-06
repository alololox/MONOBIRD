using System.Collections.Generic;
using System.Linq;
using Fake.PIM.data;
using Fake.PIM.Models;
using Microsoft.AspNetCore.Mvc;

namespace cdp_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ValuesController : ControllerBase
    {
        private readonly IQueryable<recordsRecord> data; 

        public ValuesController(IPimData pimData)
        {
            data =  pimData.Getdata(); 
        }

        // GET api/values
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<recordsRecord> Get(string id) 
        {
            
            var xxx = data.FirstOrDefault(x => x.fields[0].values[0].Value == id);
          return xxx;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
