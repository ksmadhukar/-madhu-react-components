import React from 'react'
import Toaster from '../components/Toaster'
import { AiOutlinePlus } from 'react-icons/ai';
import Button from '../components/Button';

function ToasterPage() {
  return (
    <div className="flex flex-col justify-around p-6">
      <div className="flex flex-col">
        <h4 className='pb-4'>Button Variations</h4>
        <div className="pb-8">
            
        </div>
      </div>
      <div className="flex flex-col">
          <h4 className='pb-4'>Outline Buttons with Variations</h4>
          <div className="pb-8">
            
          </div>
      </div>
      <div className="flex flex-col">
          <h4 className='pb-4'>Ghost Buttons with Variations</h4>
          <div className="pb-8">
            <Button name='Button' variant={"ghost"} type={"textonly"} size={"large"} />
            <Button name='Button' variant={"ghost"} type={"texticon"} size={"large"} icon={<AiOutlinePlus />} />
            <Button variant={"ghost"} type={"icononly"} size={"large"} icon={<AiOutlinePlus />} />
            <Button name='Button' variant={"ghost"} disabled />
            <Button name='Button' variant={"ghost"} type={"textonly"} size={"wide"} />
            <Button name='Button' variant={"ghost"} type={"textonly"} size={"medium"} />
            <Button name='Button' variant={"ghost"} type={"texticon"} size={"medium"} icon={<AiOutlinePlus />} />
            <Button variant={"ghost"} type={"icononly"} size={"medium"} icon={<AiOutlinePlus />} />
            <Button name='Button' variant={"ghost"} size={"medium"} disabled />
          </div>
        </div>
    </div>
  )
}

export default ToasterPage