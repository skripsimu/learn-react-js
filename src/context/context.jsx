import { Component, createContext } from "react";

const RootContext = createContext();

/// Provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return (
        class ParentComponent extends Component {
            state = {
                totalOrder: 5
            }

            dispatch = (action) => {
                console.log('action', action);
                if (action.type === 'ADD_ORDER') {
                    this.setState({
                        totalOrder: this.state.totalOrder + 1
                    })
                }
                if (action.type === 'REMOVE_ORDER') {
                    this.setState({
                        totalOrder: this.state.totalOrder - 1
                    })
                }
            }
            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    } >
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}

export default GlobalProvider;

/// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return <Consumer>
                    {
                        value => {
                            return <Children {...this.props} {...value} />
                        }
                    }
                </Consumer>
            }
        }
    )
}