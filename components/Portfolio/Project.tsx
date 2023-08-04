import Image from 'next/image';
import Link from 'next/link';
import Icon from '../Icon';
import { Button } from '../ui/button';

interface Props {
  project: {
    name: string;
    description: string;
    href: string;
    image: string;
  };
}

const Project = ({ project }: Props) => {
  const { name, description, image, href } = project;

  return (
    <>
      <div className="grid grid-cols-4 p-6">
        <div className="col-span-3">
          <h2 className="mb-2 text-2xl font-semibold">{name}</h2>
          <p className="text-md">{description}</p>
        </div>

        <Button className="row-span-2 self-start justify-self-end rounded-full bg-white p-2 hover:bg-gray-200">
          <Link href={href} target="_blank">
            <Icon
              name="arrow-up-right"
              className="flex h-5 w-5 items-center justify-center font-sans font-bold text-black"
            />
          </Link>
        </Button>
      </div>
      <div className="flex w-full items-center justify-center">
        <Image src={image} alt={`Screenshot of ${name}`} height={300} width={250} />
      </div>
    </>
  );
};

export default Project;
