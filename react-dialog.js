import ReactWidget from './react-widget';
class Dialog extends ReactWidget {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var element = new aui.Dialog({
            root: $(ReactDOM.findDOMNode(this)),
            el: this.props.children
        });
        element.init();
        element.render();
    }

    render() {
        return <div>
        </div>
    }
}

window.$$.Dialog = Dialog;