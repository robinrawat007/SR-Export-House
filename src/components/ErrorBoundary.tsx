import { Component, type ReactNode } from 'react'
import { AlertTriangle } from 'lucide-react'

type Props = { children: ReactNode }
type State = { hasError: boolean; message: string }

export class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { hasError: false, message: '' }
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, message: error.message }
    }

    override componentDidCatch(error: Error, info: { componentStack: string }) {
        console.error('[ErrorBoundary]', error, info.componentStack)
    }

    handleReload = () => {
        this.setState({ hasError: false, message: '' })
        window.location.reload()
    }

    override render() {
        if (!this.state.hasError) return this.props.children

        return (
            <div
                role="alert"
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    padding: '2rem',
                    background: '#f4f4f2',
                    textAlign: 'center',
                    fontFamily: 'Lato, sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        background: 'rgba(35,81,48,0.1)',
                        color: '#235130',
                    }}
                >
                    <AlertTriangle style={{ width: 32, height: 32 }} />
                </div>
                <div>
                    <h1 style={{ margin: 0, fontSize: '1.75rem', color: '#1a2018', fontFamily: 'Playfair Display, serif' }}>
                        Something went wrong
                    </h1>
                    <p style={{ margin: '0.75rem 0 0', color: '#5b646f', fontSize: '0.95rem', maxWidth: 400 }}>
                        An unexpected error occurred. Please try refreshing the page.
                    </p>
                    {this.state.message && (
                        <p style={{ margin: '0.5rem 0 0', color: '#888', fontSize: '0.75rem', fontFamily: 'monospace' }}>
                            {this.state.message}
                        </p>
                    )}
                </div>
                <button
                    onClick={this.handleReload}
                    style={{
                        padding: '0.75rem 2rem',
                        background: 'linear-gradient(135deg, #235130, #2d6b3f)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '0.5rem',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        boxShadow: '0 4px 15px rgba(35,81,48,0.35)',
                    }}
                >
                    Reload Page
                </button>
            </div>
        )
    }
}
