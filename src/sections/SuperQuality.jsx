import { shoe8 } from "../assets/images";
import { manadoc } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> General </span>
          <span className='text-coral-red'>Medicine </span> Services
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Discover our range of General Medicine services, designed to provide personalized 
        care for a wide spectrum of health issues. We're 
        committed to your well-being, from diagnosis to recovery
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='Chat with us' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={manadoc}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain rounded-full'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
