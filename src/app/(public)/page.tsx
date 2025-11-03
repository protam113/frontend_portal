
import { Container } from '@/components';
import Header from '@/components/design/Header';
import { DefaultHeaderCards } from '@/components/sections/header.section';
import { SecondsSections } from '@/components/sections/second.sections';
import { ThirdSections } from '@/components/sections/third.section';

export default function Home() {
  return (
    <Container className="flex flex-1 flex-col">
      <Header title="Unite Compliance" />
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <DefaultHeaderCards />
        <SecondsSections />
        <ThirdSections />
      </div>

    </Container>
  );
}
