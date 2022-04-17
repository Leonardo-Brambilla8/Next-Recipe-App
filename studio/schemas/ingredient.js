export default {
  name:"ingredient",
  title:"Ingredients",
  type:"document",
  fields: [{
    name:"name",
    titile:"Ingredients",
    type:"string"
  },
  {
    name:"image",
    title:"Image",
    type:"image",
    Option: {
      hotspot: true
    }
  },
  {
    name:"notes",
    title:"Notes",
    type:"text",
    
  }
  ]
}