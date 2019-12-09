using Api.Pdp.Helpers;
using Api.Pdp.Models;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Api.Pdp.UnitTests
{
    [TestClass]
    public class ConverterTests
    {
        [TestMethod]
        public void ConvertedCdpShouldHaveCorrectName()
        {
            const string productname = "alpha sv";
            recordsRecord recordsRecord = new recordsRecord();
            recordsRecord.fields = new recordsRecordField[] { new recordsRecordField
                {
                    name = "name",
                    values = new recordsRecordFieldValue[] { new recordsRecordFieldValue {  Value = productname, language = "EN" } }
                }
            };

            var result = Converters.toCDP(recordsRecord);
            Assert.AreEqual(result.Name, productname);
        }
    }
}
