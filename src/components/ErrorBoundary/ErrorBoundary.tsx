import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
interface State {
  hasError: boolean;
}
export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    console.log(error);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo): void {
    console.log(error, info.componentStack);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Darth vader attacks</h1>
          <h2>Error</h2>
        </>
      );
    }

    return this.props.children;
  }
}
