import CreateToolbar from './create.toolbar';
import SearchToolbar from './search.toolbar';

export default function ToolbarComponent() {
  return (
    <div className='my-5 flex flex-col-reverse items-center justify-between gap-2 md:flex-row'>
      <SearchToolbar />
      <CreateToolbar />
    </div>
  );
}
