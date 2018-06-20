function act(event)
{
    console.log("in");
    if( event.id == "mafulapic" )
    {
        event.setAttribute( "src", "mafula.gif");
        event.setAttribute( "height", "264px");
        event.setAttribute( "width", "464px");
    }
    if( event.id == "kelapic")
    {
        event.setAttribute( "src", "kela.gif");
    }
    if( event.id == "lanpic"){
        event.setAttribute( "src", "lanlanlu.gif");
    }
}

function leav(event)
{
    if( event.id == "mafulapic" )
    {
        event.setAttribute( "src", "mafula.jpg");
    }
    if( event.id == "kelapic" )
    {
        event.setAttribute( "src", "kela.jpg");
    }
    if( event.id == "lanpic"){
        event.setAttribute( "src", "lanlanlu.jpg");
    }
}

