import { render } from '@testing-library/react';
import React from 'react';
import s from "./Paginator.module.css";

export class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            step: 10,
            end: 10,
        }
    }
    componentDidMount() {
        const arrTemp = [];
        for (let index = 1; index < this.state.end; index++) {
            arrTemp.push(index);
        }
        this.setState({ arr: [...arrTemp] })
    }

    componentDidUpdate() {
        console.log('update')
    }

    left() {
        if (this.props.count) {

        }
    }
    right() {
        this.setState({
        })
    }

    render() {
        console.log('render')
        return (
            <div className={s.paginator}>
                <button className={s.left} onClick={this.left}>left</button>
                <div class={s.pages}>
                    {this.state.arr.map((item) => {
                        return <div className={s.page}>{item}</div>
                    })}
                </div>
                <button className={s.right} onClick={this.right}>right</button>
            </div>
        )
    }
}


