import Address from '../Address';
import RotatingCircle from '../RotatingCircle';

type Props = {
  className?: string;
  name?: string;
  scale?: number;
};

const HowBasedAreYouHeader = (props: Props) => {
  return (
    <h1 className={`inline-flex items-center text-4xl mb-6 ${props.className}`}>
      How
      <span className="flex mx-2 items-center font-bold">
        <div className={'w-[40px]'} style={{ scale: props.scale || 1 }}>
          <RotatingCircle theme={1} />
        </div>
        <span style={{ marginLeft: 5 }}>Based</span>
      </span>{' '}
      {props.name ? (
        <span>
          is{' '}
          <span className="font-bold">
            {props.name.startsWith('0x') ? (
              <Address
                truncatedLength={6}
                truncated={true}
                value={props.name}
              />
            ) : (
              props.name
            )}
          </span>
        </span>
      ) : (
        'are you'
      )}
      ?
    </h1>
  );
};

export default HowBasedAreYouHeader;
