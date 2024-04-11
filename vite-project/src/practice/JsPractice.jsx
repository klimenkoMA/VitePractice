import React from 'react';

const UseAlert = () => {

  const ask = (question, yes, no) => {
      if (confirm('Вы согласны?')){
          return yes;
      }else{
          return no;
      }
  }

    return (
        <div>
            <button
                onClick={ask("1", true, false) ? () => alert('Вы согласились.')
                    : () => alert('Вы отменили выполнение.')}>
                ALERT
            </button>
        </div>
    );
};

export default UseAlert;

