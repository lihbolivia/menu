class mobilenavbar{

    constructor(mobilemenu,navlist,navlinks ){

        this.mobilemenu = document.querySelector(mobilemenu);
        this.navlist = document.querySelector(navlist);
        this.navlinks= document.querySelectorAll(navlinks);
        this.activeclass = "active";

        this.handleclick = this.handleclick.bind(this);
         
    }

    animatelinks(){

        this.navlinks.forEach((link, index)=>{
        
           
            link.style.animation
            ?(link.style.animation = "")
            : (link.style.animation = 'navlinkfade 0.5s ease forwards ${index/7 + 0.3}s');
        });
    }

    handleclick(){
       

        this.navlist.classlist.toggle(this.activeclass);
        this.mobilemenu.classlist.toggle(this.activeclass);
        this.animatelinks();

    }
    addClickEvent(){

          this.mobilemenu.addeventlistener("click", this.handleclick);

    }
    init(){

        if(this.mobilemenu){

            this.addClickEvent();
        }
        return this;
    }
}
const mobilenavbar = new mobilenavbar(
    ".mobilemenu",
    ".navlist",
    "navlist li"
    );

mobilenavbar.init();
