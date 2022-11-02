//Context is a way to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

/*
HashRouter
A legacy browser router that uses same-page linking via a URL’s hash
A type of router that uses the hash portion of the URL to keep your UI in sync with the URL

*/
//from the react router library in the htm.
const Route         = ReactRouterDOM.Route;
const Link          = ReactRouterDOM.Link;
const HashRouter    = ReactRouterDOM.HashRouter;
const UserContext   = React.createContext(null);

//check component that uses the card: If a background color is set, then use it. Otherwise use default.
function Card(props) {

    function classes() {
        const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        //mb-3 - sets margin or padding to 1rem (16px if font-size is 16px)
        //https://stackoverflow.com/questions/41574776/what-is-class-mb-0-in-bootstrap-4
        return 'card mb-3 ' + bg + txt;
    };
    //"card-header" {props.header} and "card-body" text is passed in by each componet that uses the card.
    //"card-body" use conditional to check for their existance. If they exists, then add to the page.
    return(
        <div
        className={classes()}
        style={{maxWidth: "24rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    );
};

//{props.title && (<h5 className="card-title">{props.title}</h5>)}