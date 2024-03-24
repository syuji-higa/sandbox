import { useState } from 'react';

export function Foo() {
  const [value, setValue] = useState(false)

  return (
    <div>
      <label htmlFor="foo">Foo</label>
      <input
        id="foo"
        type="checkbox"
        onChange={e => setValue(e.target.checked)}
        checked={value}
      />
      {value ? 'True' : 'False'}
    </div>
  )
}
