import { ProfileForm } from '@/app/components/profile-form';
import { Separator } from '@/components/ui/separator';

export default function SettingsProfilePage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Quản lý tài khoản</h3>
                <p className="text-sm text-muted-foreground">
                    This is how others will see you on the site.
                </p>
            </div>
            <Separator />
            <ProfileForm />
        </div>
    );
}
