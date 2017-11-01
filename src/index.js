import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';
import './index.css'
import { getDomSize, getDocumentSize } from './util/cssUtil'
const springSettings = { stiffness: 170, damping: 26 };


export default class Swiper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDown: false,
            currentX: null,
            diffX: null,
            oldDiffX: null,
        }
        this.activeIndex = 0;
    }
    componentWillMount() {

    }
    componentDidMount = () => {
        var dom = this.refs['swiper_container_sdfsdf23'];
    }

    onMouseDown(e) {
        e.preventDefault();
        // console.log("statx" + e.pageX)
        this.setState({
            isDown: true,
            currentX: e.pageX
        })
    }
    onmouseup(e) {
        var me = this;
        e.preventDefault();
        var width = document.body.offsetWidth;

        var diff = 0;
        if (me.state.diffX > 0) {
            diff = 0;
            this.activeIndex = Math.abs(diff)
        } else {
            if (Math.abs(me.state.diffX) > Math.abs(width * (this.props.lists.length - 1))) {
                diff = -(this.props.lists.length - 1);
                this.activeIndex = Math.abs(diff)
            }
            else {
                diff = Math.round((me.state.diffX - 50) / width)
                this.activeIndex = Math.abs(diff)
            }
        }


        this.setState({
            isDown: false,
            diffX: diff * width,
            oldDiffX: diff * width,
        })
        // console.log("end" + this.state.diffX)
    }
    onmousemove(e) {
        e.preventDefault();
        if (this.state.isDown) {
            var diff = this.state.currentX - e.pageX;
            this.setState({
                diffX: this.state.oldDiffX + diff
            })
            // console.log("ing" + this.state.diffX)
        }

    }
    renderChildren() {
        var me = this;
        var { lists } = this.props
        if (!lists) lists = []
        var size = getDocumentSize();
        var childrens = lists;
        var html = [];
        for (var i = 0; i < childrens.length; i++) {
            html.push(<div className="item"
                key={"fdgv" + i}
                style={{
                    width: size.width + "px"
                }}
            >{childrens[i].content}</div >)
        }
        return html
    }
    renderIndex() {
        var me = this;
        var { lists } = this.props
        if (!lists) lists = [];
        var html = [];
        for (var i = 0; i < lists.length; i++) {
            var active = this.activeIndex==i?'active':'';
            var className = "index_circle  "+active;
            html.push(<div className={className} key={'sdffsdgd' + i}></div>)
        }
        return <div className="index_container">{html}</div>
    }
    render() {
        var me = this;
        var size = getDocumentSize();
        var { lists } = this.props
        if (!lists) lists = []
        return (
            <div className="container_sdfsdf23"
                ref="swiper_container_sdfsdf23"
                onMouseDown={me.onMouseDown.bind(me)}
                onMouseUp={me.onmouseup.bind(me)}
                onMouseLeave={me.onmouseup.bind(me)}
                onMouseMove={me.onmousemove.bind(me)}
            >
                <Motion defaultStyle={{ x: 0 }} style={{ x: spring(this.state.diffX) }}>
                    {({ x }) => {
                        return <div className="wrapper"
                            style={{
                                display: 'flex',
                                width: (lists.length * (size.width)) + 'px',
                                position: 'relative',
                                left: x + 'px'
                            }}>
                            {this.renderChildren.call(this)}
                        </div>
                    }
                    }
                </Motion>

                {this.renderIndex.call(this)}


            </div>
        )
    }
}
