'use client';
import OnchainBuster from '@/assets/svg/OnchainBusterSvg';
import MagicButton from '@/components/MagicButton';
import ShowcaseBaseProfile from '@/components/ShowcaseBaseProfile';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { TextField } from '@radix-ui/themes';
import React from 'react';
import { useAccount } from 'wagmi';
import HowBasedAreYouHeader from '../components/HowBasedAreYouHeader';
import LoginButton from '../components/LoginButton';
import SignupButton from '../components/SignupButton';
import { useMagic } from './hooks/useMagic';
import { useMagicContext } from './hooks/useMagicContext';
import { ThreeStageState } from './state.type';

export default function Page() {
  const { address } = useAccount();
  const {
    text: [addressInput, setAddressInput],
  } = useMagicContext();
  const {
    query: { stateCheck },
    mutate: { letsDoSomeMagic },
  } = useMagic();

  return (
    <div className="flex w-100 max-w-full flex-col px-1 md:w-[1200px]">
      <section className="mt-6 mb-6 flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-row items-center justify-between gap-2 md:gap-0">
          <div className="flex justify-center items-center">
            <OnchainBuster width={100} height={50} />{' '}
            <h1 className="font-bold text-xl">Onchain Buster</h1>
          </div>
          <div className="flex items-center gap-3">
            <SignupButton />
            {!address && <LoginButton />}
          </div>
        </div>
      </section>
      <section className="templateSection relative flex w-full h-[300px] mb-[0px] flex-col items-center justify-center gap-4 rounded-xl px-2 py-10 md:grow">
        <HowBasedAreYouHeader />
        <TextField.Root
          className="mr-2 w-full rounded-md p-2 shadow-xl"
          disabled={stateCheck('HowBasedAreYou', ThreeStageState.InProgress)}
          placeholder="ENS, Basename, OneID, 0x..."
          style={{
            borderRadius: 50,
            height: '70px',
            maxWidth: '900px',
            border: '1px solid lightgray',
          }}
          size={'3'}
          value={addressInput}
          onChange={(e) => setAddressInput(e.target.value)}
        >
          <TextField.Slot>
            <MagnifyingGlassIcon height="20" width="20" />
          </TextField.Slot>
          <TextField.Slot>
            {address && (
              <MagicButton
                text="🧑‍💻 My wallet"
                textColor="text-black"
                className="bg-white hover:text-white"
                onClick={() => setAddressInput(address)}
              />
            )}
            <MagicButton
              text="Let's go 🔥"
              onClick={() => letsDoSomeMagic(addressInput)}
              loading={stateCheck('HowBasedAreYou', ThreeStageState.InProgress)}
            />
          </TextField.Slot>
        </TextField.Root>
      </section>
      <ShowcaseBaseProfile addressInput={addressInput} />
    </div>
  );
}
