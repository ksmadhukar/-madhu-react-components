import React from 'react'
import Button from '../components/Button'
import { AiOutlinePlus } from 'react-icons/ai';

function ButtonPage() {
  return (
    <div className="flex flex-col justify-around p-6">
      <div className="flex flex-col">
        <h4 className='pb-4'>Button Variations</h4>
        <div className="pb-8">
            <Button name='Button' variant={"primary"} type={"textonly"} size={"large"} />
            <Button name='Button' variant={"primary"} type={"texticon"} size={"large"} icon={<AiOutlinePlus />} />
            <Button variant={"primary"} type={"icononly"} size={"large"} icon={<AiOutlinePlus />} />
            <Button name='Button' variant={"primary"} disabled />
            <Button name='Button' variant={"primary"} type={"textonly"} size={"wide"} />
            <Button name='Button' variant={"primary"} type={"textonly"} size={"medium"} />
            <Button name='Button' variant={"primary"} type={"texticon"} size={"medium"} icon={<AiOutlinePlus />} />
            <Button variant={"primary"} type={"icononly"} size={"medium"} icon={<AiOutlinePlus />} />
            <Button name='Button' variant={"primary"} size={"medium"} disabled />
            {/* <AiOutlinePlus /> */}
            {/* <Button name='link button' as={"a"} href='/' link /> */}
        </div>
      </div>
      <div className="flex flex-col">
          <h4 className='pb-4'>Outline Buttons with Variations</h4>
          <div className="pb-8">
            <Button name='Button' variant={"outline"} type={"textonly"} size={"large"} />
            <Button name='Button' variant={"outline"} type={"texticon"} size={"large"} icon={<AiOutlinePlus />} />
            <Button variant={"outline"} type={"icononly"} size={"large"} icon={<AiOutlinePlus />} />
            <Button name='Button' variant={"outline"} disabled />
            <Button name='Button' variant={"outline"} type={"textonly"} size={"wide"} />
            <Button name='Button' variant={"outline"} type={"textonly"} size={"medium"} />
            <Button name='Button' variant={"outline"} type={"texticon"} size={"medium"} icon={<AiOutlinePlus />} />
            <Button variant={"outline"} type={"icononly"} size={"medium"} icon={<AiOutlinePlus />} />
            <Button name='Button' variant={"outline"} size={"medium"} disabled />
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

export default ButtonPage