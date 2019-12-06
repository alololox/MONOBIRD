
namespace Fake.PIM.Models
{
// NOTE: Generated code may require at least .NET Framework 4.5 or .NET Core/Standard 2.0.
    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    [System.Xml.Serialization.XmlRootAttribute(Namespace = "", IsNullable = false)]
    public partial class records
    {

        private recordsRecord[] recordField;

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute("record")]
        public recordsRecord[] record
        {
            get { return this.recordField; }
            set { this.recordField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecord
    {

        private recordsRecordField[] fieldsField;

        private recordsRecordCategorytreeCategory[][] categoriesField;

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("field", IsNullable = false)]
        public recordsRecordField[] fields
        {
            get { return this.fieldsField; }
            set { this.fieldsField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("categorytree", IsNullable = false)]
        [System.Xml.Serialization.XmlArrayItemAttribute("category", IsNullable = false, NestingLevel = 1)]
        public recordsRecordCategorytreeCategory[][] categories
        {
            get { return this.categoriesField; }
            set { this.categoriesField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordField
    {

        private recordsRecordFieldAttribute[] attributesField;

        private recordsRecordFieldValue[] valuesField;

        private string nameField;

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("attribute", IsNullable = false)]
        public recordsRecordFieldAttribute[] attributes
        {
            get { return this.attributesField; }
            set { this.attributesField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("value", IsNullable = false)]
        public recordsRecordFieldValue[] values
        {
            get { return this.valuesField; }
            set { this.valuesField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string name
        {
            get { return this.nameField; }
            set { this.nameField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordFieldAttribute
    {

        private string valueField;

        private recordsRecordFieldAttributePublish[] publishField;

        private recordsRecordFieldAttributeField[] fieldField;

        private byte stockField;

        private string codeField;

        private string hexColorField;

        private string baseColorField;

        /// <remarks/>
        public string value
        {
            get { return this.valueField; }
            set { this.valueField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute("publish")]
        public recordsRecordFieldAttributePublish[] publish
        {
            get { return this.publishField; }
            set { this.publishField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute("field")]
        public recordsRecordFieldAttributeField[] field
        {
            get { return this.fieldField; }
            set { this.fieldField = value; }
        }

        /// <remarks/>
        public byte stock
        {
            get { return this.stockField; }
            set { this.stockField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string code
        {
            get { return this.codeField; }
            set { this.codeField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string hexColor
        {
            get { return this.hexColorField; }
            set { this.hexColorField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string baseColor
        {
            get { return this.baseColorField; }
            set { this.baseColorField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordFieldAttributePublish
    {

        private string regionField;

        private bool valueField;

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string region
        {
            get { return this.regionField; }
            set { this.regionField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlTextAttribute()]
        public bool Value
        {
            get { return this.valueField; }
            set { this.valueField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordFieldAttributeField
    {

        private recordsRecordFieldAttributeFieldAttribute[] attributesField;

        private string[] valuesField;

        private string nameField;

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("attribute", IsNullable = false)]
        public recordsRecordFieldAttributeFieldAttribute[] attributes
        {
            get { return this.attributesField; }
            set { this.attributesField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("value", IsNullable = false)]
        public string[] values
        {
            get { return this.valuesField; }
            set { this.valuesField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string name
        {
            get { return this.nameField; }
            set { this.nameField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordFieldAttributeFieldAttribute
    {

        private string valueField;

        private recordsRecordFieldAttributeFieldAttributeField fieldField;

        private ushort stockField;

        private string codeField;

        /// <remarks/>
        public string value
        {
            get { return this.valueField; }
            set { this.valueField = value; }
        }

        /// <remarks/>
        public recordsRecordFieldAttributeFieldAttributeField field
        {
            get { return this.fieldField; }
            set { this.fieldField = value; }
        }

        /// <remarks/>
        public ushort stock
        {
            get { return this.stockField; }
            set { this.stockField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string code
        {
            get { return this.codeField; }
            set { this.codeField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordFieldAttributeFieldAttributeField
    {

        private recordsRecordFieldAttributeFieldAttributeFieldValues valuesField;

        private string nameField;

        /// <remarks/>
        public recordsRecordFieldAttributeFieldAttributeFieldValues values
        {
            get { return this.valuesField; }
            set { this.valuesField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string name
        {
            get { return this.nameField; }
            set { this.nameField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordFieldAttributeFieldAttributeFieldValues
    {

        private uint valueField;

        /// <remarks/>
        public uint value
        {
            get { return this.valueField; }
            set { this.valueField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordFieldValue
    {

        private string regionField;

        private string languageField;

        private string currencyField;

        private string valueField;

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string region
        {
            get { return this.regionField; }
            set { this.regionField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string language
        {
            get { return this.languageField; }
            set { this.languageField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string currency
        {
            get { return this.currencyField; }
            set { this.currencyField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlTextAttribute()]
        public string Value
        {
            get { return this.valueField; }
            set { this.valueField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordCategorytreeCategory
    {

        private recordsRecordCategorytreeCategoryValue[] valuesField;

        private string uniqueidField;

        private bool publishField;

        /// <remarks/>
        [System.Xml.Serialization.XmlArrayItemAttribute("value", IsNullable = false)]
        public recordsRecordCategorytreeCategoryValue[] values
        {
            get { return this.valuesField; }
            set { this.valuesField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string uniqueid
        {
            get { return this.uniqueidField; }
            set { this.uniqueidField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public bool publish
        {
            get { return this.publishField; }
            set { this.publishField = value; }
        }
    }

    /// <remarks/>
    [System.SerializableAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType = true)]
    public partial class recordsRecordCategorytreeCategoryValue
    {

        private string languageField;

        private string valueField;

        /// <remarks/>
        [System.Xml.Serialization.XmlAttributeAttribute()]
        public string language
        {
            get { return this.languageField; }
            set { this.languageField = value; }
        }

        /// <remarks/>
        [System.Xml.Serialization.XmlTextAttribute()]
        public string Value
        {
            get { return this.valueField; }
            set { this.valueField = value; }
        }
    }

}