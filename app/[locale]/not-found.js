export default function NotFound() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      gap: '20px'
    }}>
      <h1>404</h1>
      <p className="b2">Page not found</p>
      <a href="/en" className="b2">Go home</a>
    </div>
  );
}
