import io from 'socket.io-client';
import { Component } from 'react';
import Layout from '../components/Layout'
import { render } from 'react-dom';

const demoDate = () => {
    const d = new Date;
    return d.toLocaleTimeString();
}

/*
function connectSocket(): void {

}
*/

class ChatIO extends Component {
    private socket: any;
    constructor(props: any){
        super(props);
        this.state = {
            hello: ''
        }
    }
    /*
    componentDidMount() {
        this.socket = io();
        this.socket.on('connect', (s: any) => {
            console.log('socket.io->connect:', s.id);
        });
    }
    componentWillUnmount () {
        this.socket.close();
    }
    */
    render() {
        return (
            <Layout title="Settings | Next.js + TypeScript Example">
                <h1>Chat</h1>
                <>
                        <div className="force-overflow">
                            <div className="card mt-2">
                                <div className="card-body" key={ 1 } >
                                    <p style={{ marginBottom: 0 }}>{ demoDate() }</p>
                                    <p style={{ marginBottom: 0 }}><b>admin</b></p>
                                    <p style={{ marginBottom: 0 }}>example message</p>
                                </div>
                            </div>
                            <div className="card mt-2" style={{ textAlign: 'right' }}>
                                <div className="card-body" key={ 2 } >
                                    <p style={{ marginBottom: 0 }}>{ demoDate() }</p>
                                    <p style={{ marginBottom: 0 }}><b>admin</b></p>
                                    <p style={{ marginBottom: 0 }}>next message</p>
                                </div>
                            </div>
                        </div>
                        <form className="mt-4">
                            <p><b>Message</b></p>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Send</button>
                            </div>
                        </form>
                    </>
            </Layout>
        )
    }
}

export default ChatIO;
