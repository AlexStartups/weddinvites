import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { getRelativeLocaleUrl } from 'astro:i18n'
import { FLAGS_ICONS } from '../../helpers/flagsIcons.jsx'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const LangSelector = ({langs, currentLang}) => {
  const [selected, setSelected] = useState(currentLang)

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          {/* <Listbox.Label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</Listbox.Label> */}
          <div className="relative text-right">
            <Listbox.Button className="relative w-full bg-white cursor-default rounded-md py-1.5 pl-2 pr-10 text-right text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6 md:w-max">
              <span className="flex items-center">
                {FLAGS_ICONS[currentLang]}
                <span className="ml-1 block">{ selected }</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-900" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute right-0 z-10 bg-white mt-1 max-h-56 w-max overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {langs.map((lang, i) => (
                  <Listbox.Option
                    key={i}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={lang}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          {FLAGS_ICONS[lang]}
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-1 block')}
                          >
                            <a href={getRelativeLocaleUrl(lang, '')}>{lang}</a>
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
