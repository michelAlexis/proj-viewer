"use client"


import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  proj: string;
  onSubmit: (value: Source) => void;
}

interface Source {
  proj: string;
  geojson: object;
}
interface SourceForm {
  proj: string;
  geojson: string;
}

export default function SourceInput(props: Props) {
  const {
    register,
    handleSubmit
  } = useForm<SourceForm>({
    values: {
      proj: props.proj,
      geojson: ''
    },

  });

  const onSubmit: SubmitHandler<SourceForm> = data => {
    try {
      const geojson = JSON.parse(data.geojson) as object;
      if(typeof geojson === 'object') {
        props.onSubmit({
          proj: data.proj,
          geojson: geojson
        })
      }
    } catch (e) {
      console.warn('Failt to parse geojson', e)
    }
  }


  return <>
    <form className='flex flex-col gap-3 text-black' onSubmit={ handleSubmit(onSubmit) }>
      <button type='submit'>Submit</button>

      <input { ...register('proj') } />
      <textarea rows={8} { ...register('geojson') }/>
    </form>
  </>
}
