import React, { useEffect } from 'react';

const ReservationModal = (props: any) => {
  const modalState = props.toggle;
  const action = props.action;

  useEffect(() => {
    document.body.style.overflow = modalState ? 'hidden' : 'unset';
  }, [modalState]);

  return (
    <>
      {modalState && (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none overflow-auto">
            <div className="relative my-6 mx-auto w-full max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Ajanvaraus</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={action}
                  >
                    <span className="text-red-600" style={{ fontSize: '2rem', lineHeight: '1' }}>
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative flex-auto overflow-y-auto" style={{ padding: 0, maxHeight: '80vh' }}>
                  <iframe
                    title="PesuPlus - Tilausivu"
                    style={{ width: '100%', height: '100%', border: 'none' }}
                    src="https://forms.fillout.com/t/43KF4KbywUus"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </>
  );
};

export default ReservationModal;
