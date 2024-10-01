import React, { useState } from 'react'
import ReactSwitch from 'react-switch'

const PasswordGenerator = () => {

  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialCharacters, setIncludeSpecialCharacters] = useState(true);

  const generatePassword = () => {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    
    let validChars = lowerCaseChars;
    if(includeUppercase) validChars += upperCaseChars;
    if(includeNumbers) validChars += numberChars;
    if(includeSpecialCharacters) validChars += specialChars;

    let generatedPassword = '';

    for(let i = 0; i < passwordLength; i++) {
    }
  }
    

  return (
    <div className='pt-8 text-white font-bold'>
      <div className='flex flex-col items-center'>
        <div className='bg-purple-800 w-[350px] shadow-2xl hover:shadow-blue-900 rounded-md p-3'>

          <div className='mb-4 flex items-center justify-between'>
            <label htmlFor="">Password Length:</label>
            <input
              className='w-12 bg-purple-700 pl-2'
              type="number"/>
          </div>
          <div className='mb-4 flex items-center justify-between'>
            <label htmlFor="">Include Uppercase:</label>
            <ReactSwitch
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <div className='mb-4 flex items-center justify-between'>
            <label htmlFor="">Include Numbers:</label>
            <ReactSwitch
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <div className='mb-4 flex items-center justify-between'>
            <label htmlFor="">Include Special Characters:</label>
            <ReactSwitch
              height={20}
              width={40}
              handleDiameter={18}
            />
          </div>
          <button className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-2 text-white font-bold rounded-md'>Generate Password</button>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
