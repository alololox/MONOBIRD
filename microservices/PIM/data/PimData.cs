
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Xml.Serialization;
using cdp_api.models;
using Microsoft.Extensions.Configuration;


namespace cdp_api.data
{
  public class PimJsonData : IPimData
  {
    private readonly string dataFile;
    private readonly IList<recordsRecord> data;
    private IConfiguration iconfig;
    public PimJsonData(IConfiguration configuration)
    {
      iconfig = configuration;
      dataFile = iconfig["theDataSourceFile"];
      // dataFile = "data/f19.xml";
      XmlRootAttribute xRoot = new XmlRootAttribute();
      xRoot.ElementName = "records";
      // xRoot.Namespace = "http://www.cpandl.com";
      xRoot.IsNullable = true;


      XmlSerializer xml = new XmlSerializer(typeof(records), xRoot);
      FileStream xmlStream = new FileStream(dataFile, FileMode.Open);
      var result = (records)xml.Deserialize(xmlStream);
      data = result.record;
      xmlStream.Close();
      //XmlSerializer serializer = new XmlSerializer(typeof(records));
      //StreamReader reader = new StreamReader(dataFile);

      //data = (IList<records>) serializer.Deserialize(reader);
      //this.data = JsonConvert.DeserializeObject<IList<Pim>>(File.ReadAllText(dataFile));
    }
    public IQueryable<recordsRecord> Getdata()
    {
      return this.data.AsQueryable();
    }
  }

  public interface IPimData
  {
    IQueryable<recordsRecord> Getdata();
  }
}
