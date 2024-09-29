import Image from 'next/image';
import Menu from '../menu/menu.component';
import Link from 'next/link';
import { Button } from 'antd';

export default function AppDrawer() {
  return (
    <>
      <div className='flex-1 overflow-y-auto'>
        <Menu />
      </div>
      <div
        className={'flex flex-row items-center justify-between gap-3 px-3 py-2'}
      >
        <p>Work In-progress</p>
        {/* <Image
              variant="rounded"
              src={display_picture}
              {...stringAvatar(`${first_name} ${last_name}`)}
              className="w-[56px] h-[56px] rounded-xl"
            />
            <ListItemText
              primary={`${first_name} ${last_name}`}
              secondary={
                role ? (
                  <>
                    {role?.name} <br />
                    {role?.id}
                    {role?.name?.[0]}-{id}
                  </>
                ) : (
                  "No Role Assigned"
                )
              }
              primaryTypographyProps={{
                noWrap: true,
                className: "font-bold text-sm",
              }}
              secondaryTypographyProps={{
                noWrap: true,
                className: "text-xs leading-tight font-semibold",
              }}
            />
            <Link to={"/app/settings"}>
              <Button color="secondary">
                <Icon icon={"solar:settings-bold-duotone"} />
              </Button>
            </Link> */}
      </div>
    </>
  );
}
