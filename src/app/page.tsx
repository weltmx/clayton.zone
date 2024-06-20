import localFont from 'next/font/local'

const comicsans = localFont({ src: '../fonts/comicsans.ttf' })

export default function Home() {
  return (
    <main className='w-full relative overflow-hidden'>
      <div
        className='bg-repeat bg-center relative px-9 py-20'
        style={{ backgroundImage: 'url(/images/night-sky-tranquilo.gif)' }}
      >
        <div className='mx-auto max-w-md'>
          <div className='py-20'>
            <img
              alt=''
              className='w-[400px] mx-auto'
              width={250}
              height={20}
              src='/images/planebar.gif'
            />
          </div>

          <h1
            className='text-7xl py-12 text-center font-bold italic -rotate-2'
            style={{
              filter:
                'drop-shadow(30px 10px 4px #4444dd)  drop-shadow(50px 20px 4px #4444dd80)  drop-shadow(70px 30px 4px #4444dd80)',
            }}
          >
            CLAYZONE
          </h1>
        </div>
      </div>

      <div
        className='bg-repeat bg-center px-9 py-9 h-[280px] relative'
        style={{ backgroundImage: 'url(/images/space.png)' }}
      >
        <img
          alt=''
          className='w-[160px] object-contain absolute bottom-12 left-[50%] translate-x-[-200px]'
          width={106}
          height={106}
          src='/images/pla_new.gif'
        />
        <img
          alt=''
          className='w-[220px] object-contain absolute bottom-[200px] right-[40%] translate-x-[200px]'
          width={106}
          height={106}
          src='/images/plane7-c.gif'
        />
        <img
          alt=''
          className='w-[500px] object-contain absolute top-[-100px] left-[3%] translate-x-[-200px]'
          width={106}
          height={106}
          src='/images/32.gif'
        />

        <img
          alt=''
          className='w-[300px] object-contain absolute top-[100px] right-[20%] translate-x-[200px]'
          width={106}
          height={106}
          src='/images/18.gif'
        />
      </div>

      <div
        className='bg-repeat bg-center px-9 py-9 h-[420px] relative'
        style={{ backgroundImage: 'url(/images/sky.png)' }}
      >
        <img
          alt=''
          className='w-[160px] object-contain absolute top-[20px] left-[10%]'
          width={106}
          height={106}
          src='/images/robot.gif'
        />

        <img
          alt=''
          className='w-[230px] object-contain absolute bottom-[20px] left-[20%]'
          width={106}
          height={106}
          src='/images/seikorobot.gif'
        />

        <img
          alt=''
          className='w-[200px] object-contain absolute top-[-60px] right-[6%]'
          width={106}
          height={106}
          src='/images/plane.gif'
        />

        <img
          alt=''
          className='w-[200px] object-contain absolute bottom-[10%] right-[10%]'
          width={106}
          height={106}
          src='/images/plane_1_.gif'
        />

        <h2
          className={`${comicsans.className} text-5xl absolute left-6 right-6 top-[40%] text-center text-pink-500`}
        >
          I like planes & mechanical engineering
        </h2>
      </div>

      <div
        className='h-[120px] bg-center bg-contain bg-black invert'
        style={{ backgroundImage: 'url(/images/plane3d.gif)' }}
      ></div>

      <div className='py-[100px]'>
        <img alt='' className='w-[30px] mx-auto' width={106} height={106} src='/images/52.gif' />
      </div>
    </main>
  )
}
