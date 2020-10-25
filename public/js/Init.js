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
           margin : 30,
           breakAt : {
                1334 : 2,
                924 : 1
           }
       })
    }
}

let init = new Init();
init.initMacy();

