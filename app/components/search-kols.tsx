'use client';
import { IKOLs } from '../types/kols';
import React, { useEffect, useState } from 'react';
import envConfig from '../config';
import { ListData } from '../types/list-data';
import {
    CommandDialog,
    CommandEmpty,
    CommandInput,
    CommandItem,
    CommandList
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
const SearchKOL = () => {
    // const [searchInput, setSearchInput] = useState<string>('');
    const [open, setOpen] = React.useState(false);
    const [listKOLs, setListKOLs] = useState<ListData<IKOLs>>();
    const router = useRouter();
    const fetchKOLs = async () => {
        const response = await fetch(
            `${envConfig.NEXT_PUBLIC_API_ENDPOINT}/kols?limit=99`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }
        );
        const kols = await response.json();
        setListKOLs(kols);
    };

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);

        fetchKOLs();
        return () => {
            document.removeEventListener('keydown', down);
        };
    }, []);

    return (
        <>
            <Button
                variant={'outline'}
                className="md:w-full flex items-center justify-between"
                onClick={() => setOpen(true)}
            >
                <div className="flex items-center justify-center font-medium text-muted-foreground">
                    <Search size={20} className="mr-2" />
                    <p>Tìm kiếm tên KOL...</p>
                </div>
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </Button>

            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandInput placeholder="Search.." />
                <CommandList>
                    {listKOLs &&
                        listKOLs.data.map((kol, index) => (
                            <CommandItem
                                key={index}
                                onSelect={() => {
                                    setOpen(false);
                                    router.push(`/kols/${kol._id}`);
                                }}
                            >
                                <span>{kol.name}</span>
                            </CommandItem>
                        ))}
                </CommandList>
            </CommandDialog>
        </>
    );
};

export default SearchKOL;
