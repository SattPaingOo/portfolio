
export default{
    name: 'Top',
    data: () => ({
        drawer: false,
        group: null,
    }),
    methods:{
        isMobile() {
          if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            return true
          } else {
            return false
          }
        },
        click(val){
          var elmnt = document.getElementById(val);
          this.drawer = false;
          elmnt.scrollIntoView(true);
        },
        downloadfile(){
          window.open('https://s3.amazonaws.com/sattpaing.tk/SattPaingOo_CV.docx');
        }
    }
}