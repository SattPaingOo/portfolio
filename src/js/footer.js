
export default{
    name: 'Footer',
    methods:{
        Totop(){
          var elmnt = document.getElementById('top');
          elmnt.scrollIntoView(true);
        },
    }
}