class Init
{
    constructor()
    {
        this.macy = null;
    }
    initMacy = () => {
       this.macy = new Macy({
           container : ".grid",
           trueOrder : true,
           columns : 3,
           margin : 24,
           breakAt : {
                1024 : 2,
                768 : 1
           }
       })
    }

    onHover = () => {
        let figure = document.querySelectorAll("#store .grid figure");
        Array.from(figure).forEach(el => {
            el.addEventListener(("mouseover"), (e) => {
                this.macy.reInit();
            })
            el.addEventListener(("mouseout"), (e) => {
                this.macy.reInit();
            })
        });
    }
}

let init = new Init();
init.initMacy();
init.onHover();

