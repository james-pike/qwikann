import { component$ } from '@builder.io/qwik';
import { Tabs } from './Tabs';
import { Card } from './Card';
import { Label } from './Label';
import { Input } from './Input';


export default component$(() => {
  return (
    <section>
    <Tabs.Root class="max-w-[400px] font-headline">
      <Tabs.List class="grid w-full grid-cols-2">
        <Tabs.Tab>Upfront - $3800</Tabs.Tab>
        <Tabs.Tab>Monthly - $200/month</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Account</Card.Title>
            <Card.Description>
              Make changes to your account here. Click save when you're done.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="name">Name</Label>
              <Input id="name" value="Pedro Duarte" />
            </div>
            <div class="space-y-1">
              <Label for="username">Username</Label>
              <Input id="username" value="~peduarte" />
            </div>
          </Card.Content>
          <Card.Footer>
          <button class="btn w-full bg-gray-50">Learn More</button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
      <Tabs.Panel>
        <Card.Root>
          <Card.Header>
            <Card.Title>Password</Card.Title>
            <Card.Description>
              Change your password here. After saving, you'll be logged out.
            </Card.Description>
          </Card.Header>
          <Card.Content class="space-y-2">
            <div class="space-y-1">
              <Label for="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div class="space-y-1">
              <Label for="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </Card.Content>
          <Card.Footer>
          <button class="btn w-full bg-gray-50">Learn More</button>
          </Card.Footer>
        </Card.Root>
      </Tabs.Panel>
    </Tabs.Root>
    </section>
  );
});
