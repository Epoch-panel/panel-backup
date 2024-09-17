import React from 'react';
import { useRouter } from 'next/router';

const authHoc = (WrappedComponent) => {
  const AuthHoc = (props) => {
    const router = useRouter();

    React.useEffect(() => {
      const checkAuth = async () => {
        try {
          const res = await fetch('/check-session', {
            method: 'POST',
            credentials: 'include',
          });
          const data = await res.json();
          
          if (!data.loggedIn && !['/login', '/register', '/', '/404', '/400', '/_error', '/blacklist'].includes(router.pathname)) {
            router.push('/login');
          }
        } catch {
          router.push('/login');
        }
      };

      checkAuth();
    }, [router]);

    return <WrappedComponent {...props} />;
  };

  return AuthHoc;
};

export default authHoc;
