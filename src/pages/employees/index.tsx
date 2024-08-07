import { Layout } from "@/components/custom/layout";
import TeamSwitcher from "../dashboard/team-switch";
import LocationSwitcher from "../dashboard/location-switch";
import { SearchBox } from "@/components/custom/search-box";
import { ThemeSwitch } from "@/components/custom/theme-switch";
import { UserNav } from "@/components/user-nav";
import { LanguageSwitch } from "@/components/custom/language-switch";
import { Trans, useTranslation } from "react-i18next";
import { DataTable } from "./modules/data-table";
import { columns } from "./modules/columns";
import { useMockContext } from "@/lib/team-context-provider";
import { employees } from "@/data/data";

interface Props {}

export const Employees: React.FC<Props> = () => {
  const totalUsers = employees.length;
  const { t, i18n } = useTranslation();
  const { mockData, updatedMockData } = useMockContext();
  return (
    <Layout>
      <Layout.Header>
        <TeamSwitcher />
        <LocationSwitcher />
        <div className='ml-auto flex items-center space-x-4'>
          <SearchBox />
          <ThemeSwitch />
          <UserNav />
          <LanguageSwitch />
        </div>
      </Layout.Header>
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>
              <Trans i18nKey={"employees"}>Employees</Trans>
              <span className='pl-2'>{`(${totalUsers})`}</span>
            </h2>
            <p className='text-muted-foreground'>
              {/* Here&apos;s a list of your tasks for this month! */}
            </p>
          </div>
        </div>
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={employees} columns={columns} />
        </div>
      </Layout.Body>
    </Layout>
  );
};
export default Employees;
