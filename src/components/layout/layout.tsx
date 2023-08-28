/* eslint-disable @typescript-eslint/no-explicit-any */
import Header from '../header/header';
import Footer from '../footer/footer';
import Mainform from '../mainform/mainform';

function Layout ({ children }: any): any {
  return (
        <>
          <Header />
          <main>
            <Mainform/>
            {children}
          </main>
          <Footer />
        </>
  );
}

export default Layout;
