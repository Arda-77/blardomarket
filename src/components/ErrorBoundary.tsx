import React from 'react';
export default class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) { super(props); this.state = { hasError: false }; }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) return <h1>Bir şeyler ters gitti.</h1>;
    return this.props.children;
  }
}
