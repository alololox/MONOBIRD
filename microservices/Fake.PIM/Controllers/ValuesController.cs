using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
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
            data = pimData.Getdata();
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
            recordsRecord record = null;
            record = data.First(x => x.fields.Any(n => n.name == "name" && n.values.Any(q => q.Value.ToLower() == id.ToLower())));
            if (record != null)
                return record;
            //return via id (faster than text)
            record = data.FirstOrDefault(x => x.fields[0].values[0].Value == id);
            return record;
        }

    }
}
