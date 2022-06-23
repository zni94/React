import { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: true,
    });
    console.log({ error, errorInfo });
  }

  render() {
    if (this.state.error) return <>에러가 발생했습니다 !</>;
    return this.props.children;
  }
}

export default ErrorBoundary;
