export declare const userService: {
    find(id: number): Promise<{
        id: number;
        username: string;
        fullname: string;
        bio: string | null;
        phone: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    } | null>;
    create(body: {
        fullname: string;
        username: string;
        bio: string;
        phone: string;
    }): Promise<{
        id: number;
        username: string;
        fullname: string;
        bio: string | null;
        phone: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    update(body: {
        fullname: string;
        username: string;
        bio: string;
        phone: string;
    }, id: number): Promise<{
        id: number;
        username: string;
        fullname: string;
        bio: string | null;
        phone: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
    delete(id: number): Promise<{
        id: number;
        username: string;
        fullname: string;
        bio: string | null;
        phone: number | null;
        created_at: Date | null;
        updated_at: Date | null;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map