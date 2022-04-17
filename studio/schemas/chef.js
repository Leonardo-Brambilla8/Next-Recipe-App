export default {
  name: 'chef',
  title: 'chef',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: "chef's name",
      type: 'string',
    },
    {
      name: 'Image',
      title: "Image",
      type: 'image',
      Option: {
        hotspot: true
      }
    },
    {
      name: 'bio',
      title: "Bio",
      type: 'array',
      of: [{
        title: "Block",
        type:"block",
        styles:[{title:"Normal",value:"normal"}],
        lists: [],
      },
      ],
    },
  ],
}