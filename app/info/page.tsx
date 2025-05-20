export default function Info() {
  return (
    <div className="p-8 space-y-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-6">UI Components Demo</h1>

      {/* Button */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Button</h2>
        <div className="space-x-2 space-y-2">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-danger">Danger</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-primary" disabled>Disabled</button>
        </div>
      </section>

      {/* Text */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Text</h2>
        <div className="space-y-1">
          <div className="text-primary">Primary Text</div>
          <div className="text-success">Success Text</div>
          <div className="text-warning">Warning Text</div>
          <div className="text-danger">Danger Text</div>
          <div className="text-info">Info Text</div>
          <div className="text-muted">Muted Text</div>
        </div>
      </section>

      {/* Input */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Input</h2>
        <div className="space-y-2">
          <input className="input" placeholder="Normal input" />
          <input className="input input-error" placeholder="Error input" />
        </div>
      </section>

      {/* Dropdown */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Dropdown</h2>
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle">Dropdown</button>
          <div className="dropdown-menu mt-2">
            <div className="dropdown-item">Option 1</div>
            <div className="dropdown-item">Option 2</div>
            <div className="dropdown-item">Option 3</div>
          </div>
        </div>
      </section>

      {/* Card */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Card</h2>
        <div className="card max-w-md">
          <h3 className="text-lg font-bold mb-2">Card Title</h3>
          <p className="text-muted mb-2">This is a card component. You can put any content here.</p>
          <button className="btn btn-primary">Action</button>
        </div>
      </section>

      {/* Table */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Table</h2>
        <div className="overflow-x-auto">
          <table className="table min-w-[400px]">
            <thead>
              <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Jane Doe</td>
                <td><span className="label label-success">Active</span></td>
                <td>Admin</td>
              </tr>
              <tr>
                <td>John Smith</td>
                <td><span className="label label-warning">Pending</span></td>
                <td>User</td>
              </tr>
              <tr>
                <td>Mary Lee</td>
                <td><span className="label label-danger">Banned</span></td>
                <td>Moderator</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Icon */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Icon</h2>
        <span className="icon text-primary">
          {/* ตัวอย่างใช้ emoji หรือจะใช้ svg ก็ได้ */}
          <svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="10" /></svg>
        </span>
      </section>

      {/* Form & Label */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Form & Label</h2>
        <form>
          <div className="form-group">
            <label className="form-label required">Username</label>
            <input className="input" placeholder="Enter username" />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input className="input" placeholder="Enter email" />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Typography</h2>
        <div className="space-y-2">
          <div className="font-prompt text-base">
            <span className="text-muted">font-prompt (theme):</span> The quick brown fox jumps over the lazy dog.
          </div>
            <div >
            <span className="text-muted text-normal">text-normal (theme):</span> The quick brown fox jumps over the lazy dog.
          </div>
          <div className="font-prompt text-xs">
            <span className="text-muted">text-xs:</span> The quick brown fox jumps over the lazy dog.
          </div>
          <div className="font-prompt text-sm">
            <span className="text-muted">text-sm:</span> The quick brown fox jumps over the lazy dog.
          </div>
          <div className="font-prompt text-base">
            <span className="text-muted">text-base :</span> The quick brown fox jumps over the lazy dog.
          </div>
          <div className="font-prompt text-lg">
            <span className="text-muted">text-lg:</span> The quick brown fox jumps over the lazy dog.
          </div>
          <div className="font-prompt text-xl">
            <span className="text-muted">text-xl:</span> The quick brown fox jumps over the lazy dog.
          </div>
          <div className="font-prompt text-2xl">
            <span className="text-muted">text-2xl:</span> The quick brown fox jumps over the lazy dog.
          </div>
          <div className="font-prompt text-3xl">
            <span className="text-muted">text-3xl:</span> The quick brown fox jumps over the lazy dog.
          </div>
          <div className="font-prompt text-4xl">
            <span className="text-muted">text-4xl:</span> The quick brown fox jumps over the lazy dog.
          </div>
        </div>
      </section>
    </div>
  );
}
