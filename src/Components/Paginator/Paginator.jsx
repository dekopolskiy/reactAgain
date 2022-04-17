import axios from 'axios';
import React from 'react';
import s from "./Paginator.module.css";

export class Paginator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            right: 5,
            left: 1,
            step: 5,
        }
    }

    handleClick(page) {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=10&page=${page}`)
            .then(data => { 
                this.props.setUsers(data.data.items);
            })
    }

    right() {
        if (this.state.right > this.props.count) return
        this.setState({
            right: this.state.right + this.state.step,
            left: this.state.left + this.state.step,
        })
    }

    left() {
        if (this.state.left === 1) return
        this.setState({
            right: this.state.right - this.state.step,
            left: this.state.left - this.state.step,
        })
    }

    render() {
        const arr = [];
        if (this.state.right >= this.props.count) {
            for (let index = this.state.left; index <= this.props.count; index++) {
                arr.push(index)
            }
        } else {
            for (let index = this.state.left; index <= this.state.right; index++) {
                arr.push(index)
            }
        }
        return (
            <div className={s.paginator}>
                <button className={s.left} onClick={() => this.left()}>left</button>
                <div class={s.pages}>
                    {arr.map((item) => {
                        return <div className={s.page} 
                        onClick={() => this.handleClick(item)}
                        >{item}
                        </div>
                    })}
                </div>
                <button className={s.right} onClick={() => this.right()}>right</button>
            </div>
        )
    }
}

